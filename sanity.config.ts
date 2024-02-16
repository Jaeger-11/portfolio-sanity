import project from "@/sanity/schemas/project-schema";
import { defineConfig } from "sanity";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { structureTool } from "sanity/structure";

const config = defineConfig({
    projectId: 'im7a8cc2',

    dataset: "production",

    title: 'First Sanity Studio',

    apiVersion: "2024-02-03",

    basePath: "/admin",

    plugins: [structureTool(), vercelDeployTool()],

    schema: { types: [project] }
})

export default config;