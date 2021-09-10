/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";

function InlineCode(props: { children: React.ReactNode }): React.ReactElement {
  return (
    <code className="py-0.5 px-1 font-mono border rounded-sm bg-transparent">
      {props.children}
    </code>
  );
}

export default InlineCode;
