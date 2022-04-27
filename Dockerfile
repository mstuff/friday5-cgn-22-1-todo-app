

FROM openjdk:17

ENV ENVIRONMENT=prod

LABEL maintainer="mstuff"

ADD backend/target/app.jar app.jar

EXPOSE 8080

CMD [ "sh", "-c", "java -jar /app.jar" ]