import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", message: "" });
    setModalMessage(t("contact.thankYouMessage"));
    setShowModal(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterEmail("");
    setModalMessage(t("contact.newsletterThankYou"));
    setShowModal(true);
  };

  const inputClass =
    "w-full p-3 border border-bg-dark dark:border-bg-light rounded-md bg-transparent text-text-primary dark:text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <section className="bg-bg-light dark:bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-12 text-text-primary dark:text-text-primary transition-colors duration-300">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary dark:text-primary">
          {t("contact.title")}
        </h1>
        <p className="text-center text-sm sm:text-base text-text-secondary dark:text-text-secondary">
          {t("contact.subtitle")}
        </p>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/restaurant-story.jpg"
            alt="Our Story"
            className="w-full rounded-lg shadow-lg object-cover h-64 sm:h-80 md:h-full"
          />
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-highlight">
              {t("contact.storyTitle")}
            </h2>
            <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary">
              {t("contact.storyContent")}
            </p>
          </div>
        </section>

        {/* Location & Contact Info */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center bg-secondary dark:bg-accent p-6 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-primary dark:text-primary text-lg">
              {t("contact.locationTitle")}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary">
              {t("contact.address")}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary dark:text-primary text-lg">
              {t("contact.phone")}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary">
              +880 123 456 789
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary dark:text-primary text-lg">
              {t("contact.email")}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary">
              info@restaurant.com
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.formName")}
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.formEmail")}
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("contact.formPhone")}
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <textarea
            name="message"
            placeholder={t("contact.formMessage")}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} h-32 sm:col-span-2`}
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-primary hover:bg-highlight text-white py-3 rounded-md transition text-sm sm:text-base"
          >
            {t("contact.formSubmit")}
          </button>
        </form>

        {/* Newsletter Section */}
        <section className="mt-12 p-6 bg-secondary dark:bg-accent rounded-lg shadow text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-primary">
            {t("contact.newsletterTitle")}
          </h2>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <input
              type="email"
              placeholder={t("contact.newsletterPlaceholder")}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full sm:flex-1 p-3 border border-bg-dark dark:border-bg-light rounded-md bg-transparent text-text-primary dark:text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-highlight text-white px-6 py-3 rounded-md transition text-sm sm:text-base"
            >
              {t("contact.newsletterSubmit")}
            </button>
          </form>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-primary dark:bg-accent p-6 sm:p-8 rounded-lg shadow-lg text-center text-white max-w-sm w-full">
              <p className="text-base sm:text-lg font-semibold">
                {modalMessage}
              </p>
              <button
                className="mt-4 bg-highlight text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
