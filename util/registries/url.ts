/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import { Entry, DatabaseEntry } from "../registries";

export interface URLDatabaseEntry extends DatabaseEntry {
  type: "url";
  url: string;
  repo: string;
  default_version: string;
}

export class URLEntry implements Entry {
  public desc: string;
  private url: string;
  private repo: string;
  private readonly defaultVersion: string;

  constructor(databaseEntry: URLDatabaseEntry) {
    this.desc = databaseEntry.desc;
    this.url = databaseEntry.url;
    this.repo = databaseEntry.repo;
    this.defaultVersion = databaseEntry.default_version;
  }

  getSourceURL(path: string, version?: string): string {
    return this.url
      .replace(/\$\{v}/, version ?? this.defaultVersion)
      .replace(/\$\{p}/, path);
  }
  getRepositoryURL(path: string, version?: string): string {
    return this.repo
      .replace(/\$\{v}/, version ?? this.defaultVersion)
      .replace(/\$\{p}/, path);
  }
  async getDirectoryListing(_path: string, _version?: string): Promise<null> {
    return null;
  }
  async getVersionList(): Promise<string[] | null> {
    return null;
  }
  getDefaultVersion(): string {
    return this.defaultVersion;
  }
}
