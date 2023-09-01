"use client";

import { useInView } from "react-intersection-observer";

import { faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { cn } from "utils/classNames";
import { type Project as ProjectType } from "utils/projects";

const SlideIn = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    delay: 200,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div
      ref={ref}
      className={cn("transition-all opacity-0", className, {
        "opacity-0 -translate-x-8": !inView,
        "opacity-100 translate-0": inView,
      })}
    >
      {children}
    </div>
  );
};

const SlideUp = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { inView, ref } = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div
      ref={ref}
      className={cn("transition-opacity delay-100 opacity-0", className, {
        "-translate-y-8": !inView,
        "opacity-100 translate-0": inView,
      })}
    >
      {children}
    </div>
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
  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="relative flex items-center min-h-screen py-20 md:py-72"
      data-splitbee-event="project"
      data-splitbee-event-type={project.title.toLowerCase()}
      ref={ref}
    >
      <div
        className={cn(
          "absolute top-0 bottom-0 flex-col items-center hidden w-10 h-full -ml-5 left-1/2 md:flex",
        )}
      >
        <div
          className={cn(
            "flex-1 w-1 h-full transition-transform duration-300 origin-top scale-y-0 rounded-b opacity-0 bg-gradient-to-t from-indigo-800 to-blue-500",
            {
              "scale-y-100 opacity-100": inView,
            },
          )}
        />

        <div
          className={cn(
            "relative flex items-center justify-center w-10 h-10 my-10 transition-opacity duration-300 delay-1000 rounded-full opacity-0",
            {
              "opacity-100": inView,
            },
          )}
        >
          <FontAwesomeIcon
            className={cn("h-full w-full text-2xl text-indigo-600 ml-[14px]", {
              "rotate-180 -ml-[14px]": reverse,
            })}
            icon={faCodeMerge}
            fixedWidth
          />

          <div
            className={cn("absolute inset-0 bg-indigo-600", {
              "-left-5": reverse,
            })}
            style={{ filter: `blur(25px)` }}
          />
        </div>

        <div
          className={cn(
            "flex-1 w-1 h-full transition-transform duration-300 delay-1000 origin-top scale-y-0 rounded-t bg-gradient-to-b from-indigo-800 to-blue-500",
            {
              "scale-y-100": inView,
            },
          )}
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
          <SlideUp>
            <Image
              className={cn("object-contain w-full h-auto")}
              src={project.image}
              alt={project.title}
              width={50}
              height={50}
              priority={priority}
              sizes="100vw"
              placeholder="blur"
            />
          </SlideUp>
        </div>

        <div className="flex flex-col justify-around py-8 md:py-0 md:w-1/2">
          <div>
            <SlideIn className="delay-300">
              <h3 className="text-2xl font-bold tracking-wide sm:text-3xl font-heading">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {project.href}
              </p>
            </SlideIn>

            <SlideIn className="delay-500">
              <p className="mt-8">{project.description}</p>

              <p className="mt-2 text-sm text-muted-foreground">
                {project.roles}
              </p>
            </SlideIn>
          </div>
        </div>
      </div>
    </a>
  );
};
