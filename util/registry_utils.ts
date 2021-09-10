/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import DATABASE from "../database.json";
import { GithubEntry, GithubDatabaseEntry } from "./registries/github";
import { URLEntry, URLDatabaseEntry } from "./registries/url";
import { NPMEntry, NPMDatabaseEntry } from "./registries/npm";
import { Entry, DatabaseEntry } from "./registries";

function findDatabaseEntry(
  name: string
): GithubDatabaseEntry | URLDatabaseEntry | NPMDatabaseEntry | undefined {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return DATABASE[name];
}

export function findEntry(name: string): Entry | null {
  const dbEntry = findDatabaseEntry(name);
  switch (dbEntry?.type) {
    case "github":
      return new GithubEntry(dbEntry);
    case "url":
      return new URLEntry(dbEntry);
    case "npm":
      return new NPMEntry(dbEntry);
    default:
      return null;
  }
}

export function parseNameVersion(
  nameVersion: string
): [string, string | undefined] {
  const [name, version] = nameVersion.split("@", 2);
  return [name, version];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fileTypeFromURL(filename: string) {
  const f = filename.toLowerCase();
  if (f.endsWith(".ts")) {
    return "typescript";
  } else if (f.endsWith(".js")) {
    return "javascript";
  } else if (f.endsWith(".tsx")) {
    return "tsx";
  } else if (f.endsWith(".jsx")) {
    return "jsx";
  } else if (f.endsWith(".json")) {
    return "json";
  } else if (f.endsWith(".toml")) {
    return "toml";
  } else if (f.endsWith(".lock")) {
    return "toml";
  } else if (f.endsWith(".rs")) {
    return "rust";
  } else if (f.endsWith(".py")) {
    return "python";
  } else if (f.endsWith(".cs")) {
    return "csharp";
  } else if (f.endsWith(".php")) {
    return "php";
  } else if (f.endsWith(".cpp") || f.endsWith(".cxx") || f.endsWith(".cc")) {
    return "cpp";
  } else if (f.endsWith(".ps1") || f.endsWith(".psm1") || f.endsWith(".psd1")) {
    return "powershell";
  } else if (f.endsWith(".c")) {
    return "c";
  } else if (f.endsWith(".css")) {
    return "css";
  } else if (f.endsWith(".wasm")) {
    return "wasm";
  } else if (f.toLocaleLowerCase().endsWith("makefile")) {
    return "makefile";
  } else if (f.endsWith(".dockerfile") || f.endsWith("Dockerfile")) {
    return "dockerfile";
  } else if (f.endsWith(".yml") || f.endsWith(".yaml")) {
    return "yaml";
  } else if (f.endsWith(".htm") || f.endsWith(".html")) {
    return "html";
  } else if (f.endsWith(".md")) {
    return "markdown";
  } else if (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg")) {
    return "image";
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isReadme(filename: string) {
  return (
    filename.toLowerCase() === "readme.md" ||
    filename.toLowerCase() === "readme"
  );
}

export const entries = DATABASE as { [name: string]: DatabaseEntry };
