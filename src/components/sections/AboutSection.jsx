import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 relative z-10"> {/* Reduced vertical padding from py-24 to py-16 */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> {/* Reduced margin from mb-12 to mb-8 */}
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Reduced gap from gap-12 to gap-8 */}
          <div className="space-y-4"> {/* Reduced space-y from space-y-6 to space-y-4 */}
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground text-sm md:text-base"> {/* Added responsive text sizing */}
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground text-sm md:text-base"> {/* Added responsive text sizing */}
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center"> {/* Reduced gap and padding */}
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4"> {/* Reduced gap from gap-6 to gap-4 */}
            <div className="gradient-border p-4 card-hover"> {/* Reduced padding from p-6 to p-4 */}
              <div className="flex items-start gap-3"> {/* Reduced gap from gap-4 to gap-3 */}
                <div className="p-2 rounded-full bg-primary/10"> {/* Reduced padding from p-3 to p-2 */}
                  <Code className="h-5 w-5 text-primary" /> {/* Reduced icon size */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg"> Web Development</h4> {/* Responsive text size */}
                  <p className="text-muted-foreground text-sm">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover"> {/* Reduced padding from p-6 to p-4 */}
              <div className="flex items-start gap-3"> {/* Reduced gap from gap-4 to gap-3 */}
                <div className="p-2 rounded-full bg-primary/10"> {/* Reduced padding from p-3 to p-2 */}
                  <User className="h-5 w-5 text-primary" /> {/* Reduced icon size */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">UI/UX Design</h4> {/* Responsive text size */}
                  <p className="text-muted-foreground text-sm">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover"> {/* Reduced padding from p-6 to p-4 */}
              <div className="flex items-start gap-3"> {/* Reduced gap from gap-4 to gap-3 */}
                <div className="p-2 rounded-full bg-primary/10"> {/* Reduced padding from p-3 to p-2 */}
                  <Briefcase className="h-5 w-5 text-primary" /> {/* Reduced icon size */}
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Project Management</h4> {/* Responsive text size */}
                  <p className="text-muted-foreground text-sm">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
