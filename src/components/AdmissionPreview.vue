<template>
  <section class="admissions-preview">
    <div class="preview-container">

      <div class="preview-heading">
        <p class="eyebrow">Admissions</p>

        <h2>Apply, Estimate, Enroll</h2>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto recusandae, nostrum cum maiores molestiae sed
          totam quam qui tempora placeat.
        </p>
      </div>

      <div class="preview-grid">

        <div class="preview-card">
          <h3>Admission Process</h3>

          <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit.</li>
            <li>Architecto recusandae nostrum.</li>
            <li>Tempora placeat odio.</li>
          </ol>
        </div>

        <div class="preview-card">
          <h3>Requirements</h3>

          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit.</li>
            <li>Architecto recusandae.</li>
            <li>Voluptatum minus rerum.</li>
          </ul>
        </div>

        <div class="preview-card">
          <h3>Programs Offered</h3>

          <ul>
            <li>Kindergarten & Elementary</li>
            <li>Junior & Senior High School</li>
            <li>Undergraduate Programs</li>
            <li>School of Graduate Studies</li>
          </ul>
        </div>

      </div>

      <div class="preview-action">
        <RouterLink to="/admissions" class="admissions-btn">
          View Admissions
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.admissions-preview {
  width: 100%;
  padding: 70px 24px;
  background-color: rgb(27,27,27);
}

.preview-container {
  max-width: 1100px;
  margin: 0 auto;
}

.preview-heading {
  max-width: 700px;
  margin-bottom: 40px;
  background-color: rgb(41,41,41);
}

.eyebrow {
  margin: 0 0 8px;
  color: hsl(51, 100%, 36%);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.preview-heading h2 {
  margin: 0 0 14px;
  color: hsl(276, 100%, 21%);
  font-size: 36px;
}

.description {
  margin: 0;
  color: #64748b;
  line-height: 1.7;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: rgb(41,41,41);
}

.preview-card {
  padding: 24px;
  background-color: rgb(41,41,41);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}

.preview-card h3 {
  margin: 0 0 16px;
  color: hsl(276, 100%, 21%);
  font-size: 20px;
}

.preview-card ul,
.preview-card ol {
  margin: 0;
  padding-left: 20px;
  color: #475569;
  line-height: 1.8;
  font-size: 14px;
}

.preview-action {
  margin-top: 30px;
  text-align: center;
}

.admissions-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: hsl(276, 100%, 21%);
  border-radius: 6px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}

.admissions-btn:hover {
  background-color: #1e293b;
}

@media (max-width: 768px) {
  .preview-grid {
    grid-template-columns: 1fr;
  }

  .preview-heading h2 {
    font-size: 30px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .preview-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .admissions-preview {
    padding: 50px 20px;
  }
}

@media (max-width: 767px) {
  .admissions-preview {
    padding: 40px 16px;
  }
  .preview-grid {
    grid-template-columns: 1fr;
  }
  .preview-heading h2 {
    font-size: 26px;
  }
  .admissions-btn {
    width: 100%;
    text-align: center;
  }
}
</style>