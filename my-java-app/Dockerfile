# Use OpenJDK base image
FROM openjdk:11-jre-slim

# Set working directory
WORKDIR /app

# Copy the fat JAR from Maven target directory
COPY target/my-java-app-1.0-SNAPSHOT-jar-with-dependencies.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]
