import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
import {BiWorld} from "react-icons/bi"
interface ILink {
  link: string;
  title: ReactNode;
}

interface IProjectHeaderProps {
  title: string;
  description?: ReactNode;
  tags?: ReactNode[];
  web?: ILink;
  source?: ILink;
  otherLink?: ILink;
  children: ReactNode;
}

function ProjectHeader({
  title,
  description,
  web,
  source,
  tags,
  children,
}: IProjectHeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="relative z-10">{children}</div>
      <div className="relative z-10 flex flex-col space-y-4">
        <h2>{title}</h2>
        <hr />
        <p>{description}</p>
        <div className="flex flex-1 flex-row items-center justify-center space-x-2">
          {web && (
            <ActiveLink href={web.link}>
              <a className="btn btn-primary"><BiWorld/>{web.title}</a>
            </ActiveLink>
          )}
          {source && (
            <ActiveLink href={source.link}>
              <a className="btn btn-secondary">
                <FaGithub />
                {source.title}
              </a>
            </ActiveLink>
          )}
        </div>
        <div className="flex flex-row flex-wrap">{tags}</div>
      </div>
    </div>
  );
}

export default ProjectHeader;
