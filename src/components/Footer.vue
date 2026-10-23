<template>
  <footer class="site-footer">
    <div class="footer-container">

      <div class="footer-section">
        <h3>Borgs University</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto recusandae, nostrum cum maiores molestiae sed.
        </p>
      </div>

      <div class="footer-section">
        <h3>Important Links</h3>

        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/admissions">Admissions</RouterLink>
          </li>
          <li>
            <a href="#">Academics</a>
          </li>
          <li>
            <a href="#">Campus Life</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact Information</h3>

        <p>
          Lorem ipsum dolor sit amet.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <p>
          +63 000 000 0000
        </p>
      </div>

      <div class="footer-section">
        <h3>Social Media</h3>

        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      © 2026 Borgs University. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  background-color: rgb(41,41,41);
  color: #ffffff;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 24px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.footer-section h3 {
  margin: 0 0 16px;
  color: rgb(255,163,26);
  font-size: 16px;
}

.footer-section p {
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 1.6;
}

.footer-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  text-shadow: 0 0 1px black;
}

.footer-section a:hover {
  color: #ffffff;
}

.footer-bottom {
  padding: 20px 24px;
  border-top: 2px solid rgb(255, 255, 255);
  text-align: center;
  font-size: 13px;
  background-color: rgb(255,163,26);
  color: black;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 40px 24px;
  }
}

@media (max-width: 767px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 30px 16px;
    text-align: center;
  }
}
</style>