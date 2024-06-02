import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    console.log("MongoDB Connected.")
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Failed to have your prompts"), {
      status: 500,
    });
  }
};
