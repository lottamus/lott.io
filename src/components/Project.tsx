"use client";

import { useRef } from "react";

import { faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

import { cn } from "utils/classNames";
import { type Project as ProjectType } from "utils/projects";

const SlideIn = ({
  children,
  delay = 0.3,
  reverse,
}: {
  reverse?: boolean;
  delay?: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const Project = ({
  priority,
  project,
  reverse,
}: {
  project: ProjectType;
  reverse?: boolean;
  priority?: boolean;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.3 1"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["0.6 1", "0.7 0.6"],
  });

  return (
    <div
      className="relative flex items-center min-h-screen py-20 md:py-72"
      ref={ref}
    >
      <div
        className={cn(
          "absolute top-0 bottom-0 flex-col items-center hidden w-10 h-full -ml-5 left-1/2 md:flex",
        )}
      >
        <motion.div
          className={cn(
            "flex-1 w-1 h-full origin-top rounded-b bg-gradient-to-t from-indigo-800 to-blue-500",
          )}
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <motion.div
          className="relative flex items-center justify-center w-10 h-10 my-10 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon
            className={cn("h-full w-full text-2xl text-indigo-600 ml-[14px]", {
              "rotate-180 -ml-[14px]": reverse,
            })}
            icon={faCodeMerge}
            fixedWidth
          />

          <motion.div
            className={cn("absolute inset-0 bg-indigo-600", {
              "-left-5": reverse,
            })}
            style={{ filter: `blur(25px)` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className={cn(
            "flex-1 w-1 h-full origin-top rounded-t bg-gradient-to-b from-indigo-800 to-blue-500",
          )}
          style={{
            scaleY: scrollYProgress2,
          }}
        />
      </div>

      <div
        className={cn(
          "flex flex-wrap justify-between md:flex-nowrap md:space-x-56",
          {
            "flex-row-reverse md:space-x-reverse": reverse,
          },
        )}
      >
        <div
          className={cn(
            `relative block w-full overflow-hidden rounded-lg md:w-1/2`,
          )}
        >
          <SlideIn reverse={!reverse}>
            <Image
              className={cn("object-contain w-full h-auto")}
              src={project.image}
              alt={project.title}
              priority={priority}
              sizes="60vw"
              placeholder="blur"
            />
          </SlideIn>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          data-splitbee-event="project"
          data-splitbee-event-type={project.title.toLowerCase()}
          className="flex flex-col justify-around py-8 md:py-0 md:w-1/2"
        >
          <div>
            <SlideIn reverse={reverse}>
              <h3 className="text-2xl font-bold tracking-wide sm:text-3xl font-heading">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {project.href}
              </p>
            </SlideIn>

            <SlideIn delay={0.5} reverse={reverse}>
              <p className="mt-8">{project.description}</p>

              <p className="mt-2 text-sm text-muted-foreground">
                {project.roles}
              </p>
            </SlideIn>
          </div>
        </a>
      </div>
    </div>
  );
};
