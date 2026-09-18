"use client";

import { useState } from "react";
import Link from "next/link";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyj24qOqqv7ZSPz1FpmQ0qNRnjHVE5mYr-cBelfTaKajKsDSnRzq98zMCE4YMS9wiNRfw/exec";

export function ContactForm() {
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ msg: string; isError: boolean } | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.trim();
    const count = text ? text.split(/\s+/).filter(Boolean).length : 0;
    setWordCount(count);
  };

  const showToast = (msg: string, isError: boolean) => {
    setToast({ msg, isError });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("project_type"),
      budget: formData.get("budget"),
      projectDetails: formData.get("project_details"),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        showToast("Thank you! Your project details have been submitted.", false);
        form.reset();
        setWordCount(0);
      } else {
        showToast("Submission failed: " + result.message, true);
      }
    } catch (error) {
      console.error(error);
      showToast("Something went wrong. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        className="form"
        id="contactForm"
        data-anim="left"
        noValidate
        onSubmit={handleSubmit}
      >
        <h3>Project Enquiry</h3>
        <div className="row">
          <div className="field">
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" required placeholder="Your name" />
            <span className="msg">Required</span>
          </div>
          <div className="field">
            <label htmlFor="email">Work Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
            <span className="msg">Valid email required</span>
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              placeholder="Company or organization"
            />
          </div>
          <div className="field">
            <label htmlFor="projectType">Project Type *</label>
            <select id="projectType" name="project_type" required defaultValue="">
              <option value="" disabled>Select project type</option>
              <option value="Websites">Websites (Starter / Business / Growth)</option>
              <option value="Digital Products">Digital Products &amp; Web Apps</option>
              <option value="Business Systems">Business Systems &amp; Workflows</option>
              <option value="Platforms">Platforms &amp; E-Commerce</option>
              <option value="Software Infrastructure">Software Infrastructure &amp; APIs</option>
              <option value="Custom Software">Custom Architecture / Other</option>
            </select>
            <span className="msg">Please select a project type</span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="budget">Approximate Budget</label>
          <select id="budget" name="budget" defaultValue="Flexible">
            <option value="Under ₹15,000">Under ₹15,000 (Starter / Business Website)</option>
            <option value="₹15,000 – ₹50,000">₹15,000 – ₹50,000 (Growth Website / Initial System)</option>
            <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000 (Custom Software / Web App)</option>
            <option value="₹1,50,000+">₹1,50,000+ (Full Platform / Infrastructure)</option>
            <option value="Flexible">Flexible / Needs Assessment</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="project_details"
            required
            placeholder="What are you looking to build or improve? What problems does it solve?"
            onChange={handleInput}
          ></textarea>
          <span className="msg">Please share details about your requirements</span>
          <p className="note" id="wcount" style={{ marginTop: ".35rem" }}>
            {wordCount} words
            {wordCount > 0 && wordCount < 15 ? " — a little more detail helps" : ""}
          </p>
        </div>
        <button
          className="btn btn-primary btn-full"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Sending..." : "Discuss your project"}</span>
          {!isSubmitting && <span className="gt">&rsaquo;</span>}
        </button>
        <p className="form-note center">
          We respect your privacy. By submitting, you agree to our{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </form>

      {toast && (
        <div
          id="form-toast"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px 24px",
            borderRadius: "6px",
            color: "#fff",
            fontFamily: "inherit",
            fontSize: "0.95rem",
            zIndex: 9999,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: 1,
            transform: "translateY(0)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            pointerEvents: "none",
            background: toast.isError ? "#e53e3e" : "#10b981",
          }}
        >
          {toast.msg}
        </div>
      )}
    </>
  );
}
