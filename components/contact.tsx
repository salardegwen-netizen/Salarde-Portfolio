"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: "salardegwen@gmail.com",
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("Sending with params:", templateParams);

      const response = await emailjs.send(
        "service_un17ofe",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );

      console.log("Email sent successfully:", response);
      toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      console.error("Error status:", error?.status);
      console.error("Error text:", error?.text);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto px-4">
      <p className="text-primary font-mono text-sm mb-4">03. What&apos;s Next?</p>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-200 mb-6">
        Get In Touch
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-12">
        I&apos;m currently looking for new opportunities and my inbox is always
        open. Whether you have a question, want to collaborate on a project, or
        just want to say hi, I&apos;ll do my best to get back to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-4"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}
