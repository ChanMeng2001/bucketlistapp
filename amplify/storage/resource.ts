import { defineStorage } from "@aws-amplify/backend";

// This storage configuration ensures that only the person who uploads the image can access it. 
// The entity_id will be replaced with the user’s identifier during file uploads, restricting access to the file.
export const storage = defineStorage({
  name: "amplifyBucketTrackerImages",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});