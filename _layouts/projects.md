---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-container">
  <h1 class="section-title">Projects</h1>
  <p class="section-description">Here are some of the key projects I've worked on that showcase my expertise in AI, distributed systems, and cloud technologies.</p>
  
  <div class="projects-section">
    <h2 class="category-title">AI & Machine Learning Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-content">
          <h3>Vector Embedding Service</h3>
          <p>A scalable service for generating and managing vector embeddings for RAG applications. Built with PyTorch, FastAPI, and deployed on Kubernetes.</p>
          <div class="project-tech">
            <span class="tech-tag">PyTorch</span>
            <span class="tech-tag">FastAPI</span>
            <span class="tech-tag">Kubernetes</span>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-content">
          <h3>LLM Fine-tuning Pipeline</h3>
          <p>An end-to-end pipeline for fine-tuning large language models on domain-specific data. Implemented with Hugging Face Transformers and optimized for distributed training.</p>
          <div class="project-tech">
            <span class="tech-tag">Hugging Face</span>
            <span class="tech-tag">PyTorch</span>
            <span class="tech-tag">PEFT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="projects-section">
    <h2 class="category-title">Cloud & Infrastructure</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-content">
          <h3>Distributed Tracing System</h3>
          <p>A custom distributed tracing solution for microservices architectures that provides insights into system performance and bottlenecks.</p>
          <div class="project-tech">
            <span class="tech-tag">OpenTelemetry</span>
            <span class="tech-tag">Jaeger</span>
            <span class="tech-tag">Go</span>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-content">
          <h3>Kubernetes Operator for ML Workloads</h3>
          <p>A custom Kubernetes operator that manages the lifecycle of machine learning workloads, ensuring efficient resource utilization and fault tolerance.</p>
          <div class="project-tech">
            <span class="tech-tag">Kubernetes</span>
            <span class="tech-tag">Go</span>
            <span class="tech-tag">Kubebuilder</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="projects-section">
    <h2 class="category-title">Data Engineering</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-content">
          <h3>Real-time Analytics Platform</h3>
          <p>A streaming analytics platform built with Apache Kafka, Spark Streaming, and Databricks that processes millions of events per second.</p>
          <div class="project-tech">
            <span class="tech-tag">Kafka</span>
            <span class="tech-tag">Spark</span>
            <span class="tech-tag">Databricks</span>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-content">
          <h3>Data Quality Framework</h3>
          <p>An automated framework for detecting and addressing data quality issues in large-scale data pipelines.</p>
          <div class="project-tech">
            <span class="tech-tag">Great Expectations</span>
            <span class="tech-tag">Airflow</span>
            <span class="tech-tag">Python</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="contact-cta">
    <p>These projects represent a subset of my work. For more information or to discuss potential collaborations, please <a href="/contacts">contact me</a>.</p>
  </div>
</div>

<style>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.section-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.6;
}

.projects-section {
  margin-bottom: 60px;
}

.category-title {
  font-size: 1.8rem;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-color);
  color: var(--text-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
}

.project-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 25px;
}

.project-content h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.project-content p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-color);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background-color: var(--secondary-color);
  color: white;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.contact-cta {
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.contact-cta p {
  margin: 0;
  font-size: 1.1rem;
}

.contact-cta a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.contact-cta a:hover {
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
}
</style>
