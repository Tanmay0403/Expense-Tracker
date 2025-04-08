import ReactECharts from "echarts-for-react";

const ExpensesPieChart = ({ transactions }) => {
  // Calculate total per category directly (no state or useEffect needed)
  const getCategoryTotal = (categoryName) =>
    transactions
      .filter((t) => t.category === categoryName)
      .reduce((acc, t) => acc + Number(t.amount), 0);

  const data = [
    { label: "Food And Drinks", value: getCategoryTotal("Food and Drinks"), color: "#F87171" },   // red-400
    { label: "Groceries", value: getCategoryTotal("Groceries"), color: "#34D399" },               // green-400
    { label: "Travel", value: getCategoryTotal("Travel"), color: "#60A5FA" },                     // blue-400
    { label: "Health", value: getCategoryTotal("Health"), color: "#A78BFA" },                     // purple-400
  ];

  const option = {
    title: {
      text: "Expenses by Category",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: ₹{c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: data.map((item) => item.label),
    },
    series: [
      {
        name: "Expenses",
        type: "pie",
        radius: ["50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data.map((item) => ({
          value: item.value,
          name: item.label,
          itemStyle: { color: item.color },
        })),
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactECharts
        option={option}
        style={{ width: "100%", height: "100%" }}
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
};

export default ExpensesPieChart;
