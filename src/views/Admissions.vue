<template>
<div class="page">
<!-- Page header -->
<header class="hero">
<div class="container">
<p class="eyebrow">Admissions</p>
<h1>Apply, Estimate, Enroll (THIS IS FOR CLASS WORK SAMPLE ONLY)</h1>
<p class="lead">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto recusandae, nostrum cum maiores molestiae sed totam quam qui tempora placeat odio praesentium consequuntur enim nemo incidunt, voluptatum minus rerum ex!

</p>
</div>
</header>

<main class="container main">
<!-- Admission requirements -->
<section class="card">
<h2>Admission Requirements</h2>
<div class="requirements-grid">
<ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
</ul>
<ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
</ul>
</div>
</section>

<!-- Tuition calculator -->
<section class="card">
<h2>Tuition Fee Calculator</h2>
<p class="muted">
Select your program and units to estimate your fees for one
semester. This is an estimate only — final assessment is issued by
the Registrar's Office.
</p>

<div class="form-grid">
<label class="field">
<span>Program</span>
<select>
<option>BS Computer Science</option>
<option>BS Information Technology</option>
<option>BS Business Administration</option>
<option>BS Education</option>
<option>BS Nursing</option>
</select>
</label>

<label class="field">
<span>Year Level</span>
<select>
<option>1st Year</option>
<option>2nd Year</option>
<option>3rd Year</option>
<option>4th Year</option>
</select>
</label>

<label class="field">
<span>Units this semester: 21</span>
<input type="range" min="12" max="27" value="21" />
<div class="range-labels">
<span>12</span>
<span>27</span>
</div>
</label>
</div>

<div class="field payment-terms">
<span>Payment terms</span>
<div class="button-group">
<button type="button" class="pill active">Full payment</button>
<button type="button" class="pill">3 installments</button>
<button type="button" class="pill">5 installments</button>
</div>
</div>

<!-- Breakdown table -->
<div class="table-wrap">
<table>
<thead>
<tr>
<th class="align-left">Schedule of Fees</th>
<th class="align-right">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tuition Fee (21 units × ₱650)</td>
<td class="align-right">₱13,650</td>
</tr>
<tr>
<td>Laboratory Fee (21 units × ₱150)</td>
<td class="align-right">₱3,150</td>
</tr>
<tr>
<td>Miscellaneous Fee (8% of tuition)</td>
<td class="align-right">₱1,092</td>
</tr>
<tr class="muted-row">
<td>Registration Fee</td>
<td class="align-right">₱750</td>
</tr>
<tr class="muted-row">
<td>Library Fee</td>
<td class="align-right">₱500</td>
</tr>
<tr class="muted-row">
<td>Athletic Fee</td>
<td class="align-right">₱350</td>
</tr>
<tr class="muted-row">
<td>Medical & Dental Fee</td>
<td class="align-right">₱400</td>
</tr>
<tr class="muted-row">
<td>Guidance & Testing Fee</td>
<td class="align-right">₱300</td>
</tr>
<tr class="muted-row">
<td>ID & Insurance Fee</td>
<td class="align-right">₱450</td>
</tr>
<tr class="muted-row">
<td>Student Organization Fee</td>
<td class="align-right">₱250</td>
</tr>
</tbody>
<tfoot>
<tr class="total-row">
<td>Total Assessment (1st Year)</td>
<td class="align-right">₱20,892</td>
</tr>
</tfoot>
</table>
</div>

<p class="fine-print">
* Rates shown are sample figures for demonstration purposes.
Replace with your institution's actual schedule of fees.
</p>
</section>

<!-- CTA -->
<section class="cta">
<button type="button" class="primary-btn">Start Your Application</button>
</section>
</main>

</div>
</template>

<style scoped>
* {
box-sizing: border-box;
}

.page {
min-height: 100vh;
background-color: #f8fafc;
color: #334155;
font-family: Arial, Helvetica, sans-serif;
}

.container {
max-width: 960px;
margin: 0 auto;
padding: 0 24px;
}

/* Header */
.hero {
background-color: #0f172a;
color: #ffffff;
padding: 40px 0;
}

.eyebrow {
font-size: 13px;
text-transform: uppercase;
letter-spacing: 0.05em;
color: #94a3b8;
margin: 0 0 8px;
}

.hero h1 {
font-size: 32px;
margin: 0 0 12px;
}

.lead {
max-width: 640px;
color: #cbd5e1;
margin: 0;
line-height: 1.6;
}

/* Main content */
.main {
padding: 40px 24px;
display: flex;
flex-direction: column;
gap: 32px;
}

.card {
background-color: #ffffff;
border: 1px solid #e2e8f0;
border-radius: 8px;
padding: 24px;
}

.card h2 {
font-size: 20px;
margin: 0 0 16px;
}

.muted {
font-size: 14px;
color: #64748b;
margin: 0 0 24px;
}

/* Requirements */
.requirements-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
font-size: 14px;
}

.requirements-grid ul {
margin: 0;
padding-left: 20px;
color: #475569;
line-height: 1.8;
}

/* Calculator form */
.form-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
margin-bottom: 24px;
}

.field {
display: block;
font-size: 14px;
}

.field > span {
display: block;
font-weight: 600;
color: #475569;
margin-bottom: 6px;
}

select {
width: 100%;
padding: 8px 12px;
border: 1px solid #cbd5e1;
border-radius: 6px;
background-color: #ffffff;
font-size: 14px;
}

input[type="range"] {
width: 100%;
margin-top: 12px;
}

.range-labels {
display: flex;
justify-content: space-between;
font-size: 12px;
color: #94a3b8;
margin-top: 4px;
}

.payment-terms {
margin-bottom: 24px;
}

.button-group {
display: flex;
gap: 8px;
}

.pill {
padding: 6px 14px;
border-radius: 6px;
font-size: 14px;
border: 1px solid #cbd5e1;
background-color: #ffffff;
color: #475569;
cursor: pointer;
}

.pill.active {
background-color: #0f172a;
border-color: #0f172a;
color: #ffffff;
}

/* Table */
.table-wrap {
border: 1px solid #e2e8f0;
border-radius: 6px;
overflow: hidden;
}

table {
width: 100%;
border-collapse: collapse;
font-size: 14px;
}

thead {
background-color: #f1f5f9;
color: #64748b;
text-transform: uppercase;
font-size: 12px;
}

th,
td {
padding: 10px 16px;
text-align: left;
}

.align-right {
text-align: right;
}

.align-left {
text-align: left;
}

tbody tr {
border-top: 1px solid #f1f5f9;
}

.muted-row {
color: #64748b;
}

.total-row {
background-color: #f8fafc;
border-top: 1px solid #e2e8f0;
font-weight: 700;
}

.fine-print {
font-size: 12px;
color: #94a3b8;
margin: 16px 0 0;
}

/* CTA */
.cta {
text-align: center;
padding: 24px 0;
}

.primary-btn {
background-color: #0f172a;
color: #ffffff;
border: none;
padding: 12px 24px;
border-radius: 6px;
font-size: 15px;
font-weight: 600;
cursor: pointer;
}

.primary-btn:hover {
background-color: #1e293b;
}

/* Footer */
.site-footer {
border-top: 1px solid #e2e8f0;
padding: 24px;
text-align: center;
font-size: 13px;
color: #94a3b8;
}

/* Responsive */
@media (max-width: 640px) {
.form-grid {
grid-template-columns: 1fr;
}
.requirements-grid {
grid-template-columns: 1fr;
}
}

/* Tablet: Switch tuition calculator form fields to a 2-column grid */
@media (min-width: 768px) and (max-width: 1024px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .container {
    padding: 0 20px;
  }
}

/* Mobile: Stack form inputs, requirements, and button groups into a 1-column layout and enable table scrolling */
@media (max-width: 767px) {
  .container {
    padding: 0 16px;
  }
  .hero {
    padding: 30px 0;
  }
  .hero h1 {
    font-size: 24px;
  }
  .main {
    padding: 24px 16px;
    gap: 20px;
  }
  .requirements-grid {
    grid-template-columns: 1fr;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .button-group {
    flex-wrap: wrap;
  }
  .table-wrap {
    overflow-x: auto;
  }
  .primary-btn {
    width: 100%;
  }
}
</style>