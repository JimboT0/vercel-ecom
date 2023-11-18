import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skKPi9QHvYO0ToJyxGLhYm5TGhtEdiqYfbmWVctlzbbGuvO3Fgy0PVj2FBA1FbVTA24hZypM6lsrQmMGwaHrYPNgUGgYu3buiCa3PUih5zd1dMaVJsjBcSrIOPT8CW1GHwVYcQFerAspaVzNWhHqcE3ilszRIiz8BAEjQd57AfQwLfZstGo4"
})
