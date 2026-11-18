package main

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/yourusername/go-backend/internal/database"
)

func main() {
	// Load .env files
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: No .env file found, using system environment variables")
	}

	// Connect to Neon DB
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	dbPool, err := database.InitDB(ctx)
	if err != nil {
		log.Fatalf("Database connection error: %v", err)
	}

	// Ensure pool connection are cleaned up when the app exists
	defer dbPool.Close()

	// Server StartUp
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server configured to run on port: %s\n", port)
}