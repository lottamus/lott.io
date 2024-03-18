"use client";

import { useRef } from "react";

import { faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

import { cn } from "utils/classNames";
import { type Project as ProjectType } from "utils/projects";

import { Icon } from "./Icon";

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

  const { scrollYProgress: lineAbove } = useScroll({
    target: ref,
    offset: ["0 0.8", "0.4 1"],
  });

  const { scrollYProgress: lineBelow } = useScroll({
    target: ref,
    offset: ["1 0.95", "1 0.8"],
  });

  return (
    <div
      className="relative flex min-h-screen items-center py-20 md:py-72"
      ref={ref}
    >
      <div
        className={cn(
          "absolute bottom-0 left-1/2 top-0 -ml-5 hidden h-full w-10 flex-col items-center md:flex",
        )}
      >
        <motion.div
          className={cn(
            "h-full w-1 flex-1 origin-top rounded-b bg-gradient-to-t from-indigo-800 to-blue-500",
          )}
          style={{
            scaleY: lineAbove,
          }}
        />

        <motion.div
          className="relative my-10 flex h-10 w-10 items-center justify-center rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Icon
            className={cn("ml-[14px] h-full w-full text-2xl text-indigo-600", {
              "-ml-[14px] rotate-180": reverse,
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
            "h-full w-1 flex-1 origin-top rounded-t bg-gradient-to-b from-indigo-800 to-blue-500",
          )}
          style={{
            scaleY: lineBelow,
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
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="relative block w-full overflow-hidden rounded-lg md:w-1/2"
        >
          <div>
            <SlideIn reverse={!reverse}>
              {project.image && (
                <Image
                  className={cn("h-auto w-full object-contain")}
                  src={project.image}
                  alt={project.title}
                  priority={priority}
                  sizes="60vw"
                  placeholder="blur"
                />
              )}
            </SlideIn>
          </div>
        </a>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col justify-around py-8 md:w-1/2 md:py-0"
        >
          <div>
            <SlideIn reverse={reverse}>
              <h3 className="font-heading text-2xl font-bold tracking-wide sm:text-3xl">
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
