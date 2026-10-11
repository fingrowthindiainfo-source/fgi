import { useState } from "react";
import axios from "axios";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = { fullName: "", city: "", email: "", phone: "", age: "" };

const validate = (values) => {
  const errors = {};
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!values.city.trim() || values.city.trim().length < 2) {
    errors.city = "Please enter your city.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(digits)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }
  const age = Number(values.age);
  if (!values.age || Number.isNaN(age)) {
    errors.age = "Please enter your age.";
  } else if (age < 18) {
    errors.age = "Applicants must be at least 18 years old.";
  } else if (age > 100) {
    errors.age = "Please enter a valid age.";
  }
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-ivory px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-[border-color,box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-gold/70 focus:border-gold ${
    hasError ? "border-red-400" : "border-ivory/60"
  }`;

const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-300" data-testid={`${id}-error`}>
      {message}
    </p>
  ) : null;

const InquiryForm = () => {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");

  const update = (field) => (e) => {
    let v = e.target.value;
    if (field === "phone") v = v.replace(/\D/g, "").slice(0, 10);
    if (field === "age") v = v.replace(/\D/g, "").slice(0, 3);
    setValues((prev) => ({ ...prev, [field]: v }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setServerMessage("");
    try {
      await axios.post(`${API}/inquiry`, {
        full_name: values.fullName.trim(),
        city: values.city.trim(),
        email: values.email.trim(),
        phone: values.phone,
        age: Number(values.age),
      });
      setStatus("success");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      let message = "We could not submit your inquiry right now. Please try again.";
      if (typeof detail === "string") message = detail;
      else if (Array.isArray(detail) && detail[0]?.msg) message = detail[0].msg.replace(/^Value error, /, "");
      setServerMessage(message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center p-8 text-center" data-testid="inquiry-success">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
          <CheckCircle2 size={30} className="text-gold" />
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-white">Inquiry Submitted</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
          Thank you for your interest in Fin Growth India. Your inquiry has been submitted successfully. Our team will review your details and contact you if an appropriate opportunity is available.
        </p>
        <button
          type="button"
          onClick={() => { setValues(INITIAL); setStatus("idle"); }}
          data-testid="inquiry-submit-another-btn"
          className="gold-ring-focus mt-7 rounded-full border border-gold/50 px-6 py-2.5 text-sm font-medium text-gold transition-colors duration-300 hover:bg-gold/10"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="p-7 sm:p-9" data-testid="inquiry-form">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">Inquiry Form</p>
      <h3 className="mt-2 font-display text-xl font-bold text-white">Start Your Work</h3>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="inquiry-full-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
            Full Name
          </label>
          <input
            id="inquiry-full-name"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={update("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "full-name" : undefined}
            placeholder="Your full name"
            data-testid="inquiry-full-name-input"
            className={inputClass(errors.fullName)}
          />
          <FieldError id="full-name" message={errors.fullName} />
        </div>

        <div>
          <label htmlFor="inquiry-city" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
            City
          </label>
          <input
            id="inquiry-city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={update("city")}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city" : undefined}
            placeholder="Your city"
            data-testid="inquiry-city-input"
            className={inputClass(errors.city)}
          />
          <FieldError id="city" message={errors.city} />
        </div>

        <div>
          <label htmlFor="inquiry-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
            Email Address
          </label>
          <input
            id="inquiry-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email" : undefined}
            placeholder="you@example.com"
            data-testid="inquiry-email-input"
            className={inputClass(errors.email)}
          />
          <FieldError id="email" message={errors.email} />
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
            Phone Number
          </label>
          <div className={`flex overflow-hidden rounded-xl border bg-ivory transition-[border-color,box-shadow] duration-300 focus-within:ring-2 focus-within:ring-gold/70 focus-within:border-gold ${errors.phone ? "border-red-400" : "border-ivory/60"}`}>
            <span className="flex items-center border-r border-navy/10 bg-navy/5 px-3.5 text-sm font-semibold text-navy/70" aria-hidden="true">
              +91
            </span>
            <input
              id="inquiry-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              value={values.phone}
              onChange={update("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone" : undefined}
              placeholder="10-digit mobile number"
              data-testid="inquiry-phone-input"
              className="w-full bg-transparent px-4 py-3 text-sm text-navy placeholder:text-navy/35 focus:outline-none"
            />
          </div>
          <FieldError id="phone" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="inquiry-age" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
            Age
          </label>
          <input
            id="inquiry-age"
            type="number"
            min="18"
            max="100"
            inputMode="numeric"
            value={values.age}
            onChange={update("age")}
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? "age" : undefined}
            placeholder="18 or older"
            data-testid="inquiry-age-input"
            className={inputClass(errors.age)}
          />
          <FieldError id="age" message={errors.age} />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-400/40 bg-red-500/10 p-3.5" role="alert" data-testid="inquiry-error-banner">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-300" />
          <p className="text-xs leading-relaxed text-red-200">{serverMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        data-testid="inquiry-submit-btn"
        className="gold-ring-focus mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-display text-sm font-bold tracking-wide text-navy shadow-[0_10px_32px_rgba(214,181,116,0.3)] transition-[background-color,box-shadow,opacity] duration-300 hover:bg-gold-light hover:shadow-[0_14px_40px_rgba(214,181,116,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting…
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-mist/80" data-testid="inquiry-privacy-note">
        The information you submit is used only to respond to your inquiry. Read our{" "}
        <Link to="/privacy-policy" className="text-gold underline-offset-2 hover:underline" data-testid="inquiry-privacy-link">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default InquiryForm;
