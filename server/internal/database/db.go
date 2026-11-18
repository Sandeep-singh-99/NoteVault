package database

import (
	"context"
	"errors"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

func InitDB(ctx context.Context) (*pgxpool.Pool, error) {
	connStr := os.Getenv("DATABASE_URL")
	if connStr == "" {
		return nil, errors.New("DATABASE_URL environment variable is not set")
	}

	// Parse connection string and build pgxpool config
	config, err := pgxpool.ParseConfig(connStr)
	if err != nil {
		return nil, fmt.Errorf("Failed to parse DATABASE_URL: %w", err)
	}

	//Configure connection pool settings for Neon serverless database
	config.MaxConns = 20
	config.MinConns = 2
	config.MaxConnLifetime = 1 * time.Hour
	config.MaxConnIdleTime = 15 * time.Minute
	config.HealthCheckPeriod = 1 * time.Minute

	// Create the connection pool
	pool, err := pgxpool.NewWithConfig(ctx, config)
	if err != nil {
		return nil, fmt.Errorf("unable to create connection pool: %w", err)
	}

	// ping the database to verify credentials and connectivity immediately 
	pingCtx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	if err := pool.Ping(pingCtx); err != nil {
		pool.Close()
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	log.Println("Successfully connected to neon DB!")
	return pool, nil
}