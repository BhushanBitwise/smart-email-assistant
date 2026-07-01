package com.email.writer.app;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class EmailGeneratorService {

    private final WebClient webClient;

    @Value("${openrouter.api.url}")
    private String apiUrl;

    @Value("${openrouter.api.key}")
    private String apiKey;

    @Value("${openrouter.model}")
    private String model;

    public EmailGeneratorService(WebClient.Builder builder) {
        this.webClient = builder.build();
    }

    public String generateEmailReply(EmailRequest emailRequest) {

        System.out.println("Current Model = " + model);

        String prompt = buildPrompt(emailRequest);

        Map<String, Object> requestBody = Map.of(
                "model", model,
                "messages", List.of(
                        Map.of(
                                "role", "user",
                                "content", prompt
                        )
                )
        );

        try {

            String response = webClient.post()
                    .uri(apiUrl)
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .header("HTTP-Referer", "http://localhost:8080")
                    .header("X-Title", "AI Email Writer")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            System.out.println("========== FULL API RESPONSE ==========");
            System.out.println(response);
            System.out.println("=======================================");

            return extractResponseContent(response);

        } catch (Exception e) {
            e.printStackTrace();
            return "OpenRouter Error: " + e.getMessage();
        }
    }

    private String extractResponseContent(String response) {

        try {

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);

            // Standard OpenAI/OpenRouter format
            JsonNode choices = root.path("choices");

            if (choices.isArray() && choices.size() > 0) {

                JsonNode message = choices.get(0).path("message");

                if (!message.isMissingNode()) {

                    String content = message.path("content").asText();

                    if (content != null && !content.isBlank()) {
                        return content;
                    }
                }
            }

            // Fallback: direct content
            if (root.has("content")) {
                return root.path("content").asText();
            }

            // Fallback: text field
            if (root.has("text")) {
                return root.path("text").asText();
            }

            // Last fallback
            return "No valid response found.\nFull Response:\n"
                    + root.toPrettyString();

        } catch (Exception e) {

            e.printStackTrace();

            return "Error Parsing Response: "
                    + e.getMessage();
        }
    }

    private String buildPrompt(EmailRequest emailRequest) {

        StringBuilder prompt = new StringBuilder();

        prompt.append("""
                Generate a professional email reply.
                Do not generate a subject line.
                Keep the reply concise and professional.
                """);

        if (emailRequest.getTone() != null &&
                !emailRequest.getTone().isBlank()) {

            prompt.append("\nUse a ")
                    .append(emailRequest.getTone())
                    .append(" tone.");
        }

        prompt.append("\n\nOriginal Email:\n")
                .append(emailRequest.getEmailContent());

        return prompt.toString();
    }
}