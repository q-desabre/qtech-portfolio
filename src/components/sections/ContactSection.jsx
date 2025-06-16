import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMethod = (props) => {
  const { icon: Icon, title, content, href } = props;
  return (
    <div className="bg-card p-2 sm:p-4 md:p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300 z-10">
      <div className="flex items-center gap-2 xxs:gap-3 sm:gap-4 ">
        <div className="w-8 h-8 xxs:w-9 xxs:h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
          <Icon className="h-3 w-3 xxs:h-4 xxs:w-4 md:h-5 md:w-5 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-sm xxs:text-base md:text-lg">
            {title}
          </h4>
          {href ? (
            <a
              href={href}
              className="text-xs xxs:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {content}
            </a>
          ) : (
            <p className="text-xs xxs:text-sm text-muted-foreground">
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const SocialLink = (props) => {
  const { icon: Icon, href, label } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 xxs:p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center"
    >
      <Icon className="h-4 w-4 xxs:h-5 xxs:w-5 text-primary" />
    </a>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
        console.error("Email sending error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 relative bg-secondary/30 z-10"
    >
      <div className="container mx-auto max-w-5xl 2xl:max-w-7xl">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-xs xxs:text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl 2xl:max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <ContactMethod
                icon={Mail}
                title="Email"
                content="desabre-pro@gmail.com"
                href="mailto:desabre-pro@gmail.com"
              />

              <ContactMethod
                icon={Phone}
                title="Phone"
                content="+33 (0) 6 78 72 41 46"
                href="tel:+33678724146"
              />

              <ContactMethod
                icon={MapPin}
                title="Location"
                content="Nice, France"
              />
            </div>

            <div className="pt-6">
              <h4 className="font-medium text-sm xxs:text-base mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex gap-3 justify-center">
                <SocialLink
                  icon={Linkedin}
                  href="https://www.linkedin.com/in/desabre-quentin/"
                  label="LinkedIn"
                />
                <SocialLink
                  icon={Github}
                  href="https://github.com/q-desabre"
                  label="GitHub"
                />
                {/* <SocialLink
                  icon={Instagram}
                  href="https://www.instagram.com/"
                  label="Instagram"
                />
                <SocialLink
                  icon={Twitch}
                  href="https://www.twitch.tv/"
                  label="Twitch"
                /> */}
              </div>
            </div>
          </div>

          <div className="bg-card p-3 sm:p-6 md:p-8 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send a Message
            </h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs xxs:text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs xxs:text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs xxs:text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-2 sm:py-3 text-xs xxs:text-sm sm:text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
