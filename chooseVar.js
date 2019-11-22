    var publicCurrentValueWorth = null

        var w = 1650
        var h = 850
        var padding = 40

        d3.csv("var_data.csv").then(function (data) {

            dataset = data;

            var svg = d3.select("#chooseVar")
                .append("svg")
                .attr("width", w)
                .attr("height", 300);

            var tooltip = d3.select("chooseVar")
                .append("div")
                .style("posiiton", "absolute")
                .style("z-index", "0")
                .attr("id", "tooltip")


            svg.selectAll("img")
                .data(dataset)
                .enter()
                .append("svg:image")
                .attr("x", function (d, i) {
                    return i % 7 * 225 + 70
                })
                .attr("y", function (d, i) {
                    return Math.floor(i / 7) * 225 + 70
                })
                .attr("width", 150)
                .attr("height", 150)
                .attr("xlink:href", function (d) {
                    return d["images"].replace("real_variables", "really_variables")
                    // console.log(d["images"])
                })
                .on("mouseover", function (d) {
                    tooltip.html(d["tooltipinfo"])
                    tooltip.style("visibility", "visible")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    return tooltip.style("visibility", "hidden");
                })
                .on("click", function (d) {
                   console.log("compare=",d.amountNum)
                    var valueWorth = d.amountNum
                    var publicCurrentValueWorth = valueWorth
                })

            svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function (d) {
                    //console.log(d["variableName"])
                    return d["variableName"]
                })
                .attr("x", function (d, i) {
                    return i % 10 * 225 + 120
                })
                .attr("y", function (d, i) {
                    return Math.floor(i / 10) * 225 + 240
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "14px")
                .attr("fill", "black");


            svg.selectAll(".hf")
                .data(dataset)
                .enter()
                .append("text")
                .attr('class', "hf")
                .text(function (d) {
                    //console.log(d["humanFriendly"])
                    return d["humanFriendly"]
                })
                .attr("x", function (d, i) {
                    return i % 10 * 225 + 125
                })
                .attr("y", function (d, i) {
                    return Math.floor(i / 10) * 225 + 260
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "gray");
        });