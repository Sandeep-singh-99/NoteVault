package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Loads variables from .env into the system environment
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: No .env file found, using system environment variables")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Server configured to run on port: %s\n", port)
}