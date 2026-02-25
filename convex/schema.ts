import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    retros: defineTable({ title: v.string(), date: v.string(), status: v.string(), participants: v.number() }),
    columns: defineTable({ retroId: v.id("retros"), name: v.string(), color: v.string() }).index("by_retro", ["retroId"]),
    items: defineTable({ retroId: v.id("retros"), columnId: v.id("columns"), text: v.string(), votes: v.number(), author: v.optional(v.string()) }).index("by_column", ["columnId"]),
    actions: defineTable({ retroId: v.id("retros"), text: v.string(), owner: v.string(), status: v.string() })
});
