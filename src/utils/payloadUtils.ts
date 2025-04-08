import { getPayload } from "payload";
import config from "@/payload.config";

/**
 * Fetches FAQs from Payload CMS
 * @param options Optional query parameters
 * @returns Array of FAQ items
 */
export async function fetchFaqs(options = {}) {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const response = await payload.find({
    collection: "faqs",
    depth: 2,
    sort: "sortOrder:asc",
    ...options,
  });

  // Return a cleaner structure
  return {
    docs: response.docs || [],
    totalDocs: response.totalDocs || 0,
    limit: response.limit || 10,
    totalPages: response.totalPages || 0,
    page: response.page || 1,
    pagingCounter: response.pagingCounter || 1,
    hasPrevPage: response.hasPrevPage || false,
    hasNextPage: response.hasNextPage || false,
    prevPage: response.prevPage || null,
    nextPage: response.nextPage || null,
  };
}
