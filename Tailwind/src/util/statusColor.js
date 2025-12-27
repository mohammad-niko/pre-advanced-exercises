export function statusColor(status) {
    const color = [{
        status:"Active",
        bgColor:"bg-green-400"
    },{
        status:"Pending",
        bgColor:"bg-yellow-400"
    },{
        status:"Inactive",
        bgColor:"bg-red-400"
    },]

    return color.find(c=>c.status === status).bgColor
    
}