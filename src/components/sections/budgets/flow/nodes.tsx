"use client"

import { useMemo } from "react"
import { ReactFlow, Handle, type NodeProps } from "@xyflow/react"
import type { Node, Edge } from "@xyflow/react"
import { Position } from "@xyflow/react"
import { featuresTree } from "../ui/tree"
import type { FeatureNode } from "../ui/tree"
import { AnimatedSvgEdge as AnimatedSvgEdgeComponent, type AnimatedSvgEdge } from "@/components/animated-svg-edge"
import AnimateOnView from "@/animations/motion-section"
import { delayChildren } from "@/animations/variants"

const NODE_WIDTH_BASE = 260
const NODE_HEIGHT_BASE = 80
const X_GAP = 50
const LAYOUT_HEIGHT = 720

export type BudgetNodeData = { label: string; description: string; depth: number }

function getNodeSize(depth: number) {
    const scale = 1 - depth * 0.18
    const s = Math.max(scale, 0.55)
    return { w: Math.round(NODE_WIDTH_BASE * s), h: Math.round(NODE_HEIGHT_BASE * s) }
}

function BudgetNode({ data, selected }: NodeProps<Node<BudgetNodeData>>) {
    const { w, h } = getNodeSize(data.depth)
    const textSize = data.depth === 0 ? "text-base" : data.depth === 1 ? "text-sm" : data.depth === 2 ? "text-xs" : "text-xs"
    const descSize = data.depth <= 1 ? "text-xs" : "text-[10px]"
    return (
        <AnimateOnView variants={delayChildren(data.depth * 0.1)}>
        <div
            className={`rounded-lg border bg-white px-3 py-2 shadow-sm  ${selected ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-200"}`}
            style={{ minWidth: w, minHeight: h }}
        >
            <Handle type="target" position={Position.Left} className="!-left-1 !w-2 !h-2 !border-2 !border-gray-300 !bg-white"  />
            <h3 className={`font-semibold text-gray-900 leading-tight ${textSize}`}>{data.label}</h3>
            <p className={`mt-1 text-gray-500 line-clamp-2 leading-snug ${descSize}`}>{data.description}</p>
            <Handle type="source" position={Position.Right} className="!-right-1 !w-2 !h-2 !border-2 !border-gray-300 !bg-white" />
        </div>
        </AnimateOnView>
    )
}

const nodeTypes = { budget: BudgetNode }

function treeToFlow(
    node: FeatureNode,
    path: string,
    depth: number,
    nodes: Node<BudgetNodeData>[],
    edges: Edge[],
    levelIndices: Map<number, number>
): void {
    const id = path
    const levelIndex = levelIndices.get(depth) ?? 0
    levelIndices.set(depth, levelIndex + 1)

    const countAtDepth = Math.pow(2, depth)
    const spanY = LAYOUT_HEIGHT - NODE_HEIGHT_BASE
    const y = countAtDepth <= 1 ? 0 : (levelIndex / (countAtDepth - 1)) * spanY

    const { w } = getNodeSize(depth)
    let x = depth * (w + X_GAP+150)
    if (depth === 1) {
        x = x - 150
    }

    nodes.push({
        id,
        position: { x: x - 200, y },
        data: { label: node.title, description: node.description, depth },
        type: "budget",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    })

    if (node.children) {
        node.children.forEach((child, i) => {
            const childPath = `${path}-${i}`
            const edgeId = `${id}-${childPath}`
            edges.push({
                id: edgeId,
                source: id,
                target: childPath,
                type: "animatedSvgEdge",
                data: { duration: 4, shape: "dollar", path: "bezier"},
            } as AnimatedSvgEdge)
            treeToFlow(child, childPath, depth + 1, nodes, edges, levelIndices)
        })
    }
}

function getLayoutedElements(): { nodes: Node<BudgetNodeData>[]; edges: Edge[] } {
    const nodes: Node<BudgetNodeData>[] = []
    const edges: Edge[] = []
    const levelIndices = new Map<number, number>()

    treeToFlow(featuresTree, "root", 0, nodes, edges, levelIndices)

    const root = nodes.find((n) => n.id === "root")
    if (root) {
        const { h } = getNodeSize(0)
        root.position = { x: -250, y: (LAYOUT_HEIGHT - h) / 2 }
    }

    return { nodes, edges }
}

export default function FlowNodes() {
    const { nodes, edges } = useMemo(() => getLayoutedElements(), [])

    return (
        <div className="h-full w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={{ animatedSvgEdge: AnimatedSvgEdgeComponent }}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={false}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
             
                style={{ width: "100%", height: "100%" }}
                fitView
            />
        </div>
    )
}
