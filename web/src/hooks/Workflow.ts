// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

import { useSearchParams } from "react-router-dom";

export function useWorkflow(): [string | undefined, string | undefined] {
    const [searchParams] = useSearchParams();

    const workflow = searchParams.get("workflow");
    const id = searchParams.get("workflow_id");

    return [workflow === null ? undefined : workflow, id === null ? undefined : id];
}
