import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.scss";

export const DoughnutChart = ({ vote }: { vote: number }) => {
  const data = {
    labels: ["Liked", "Disliked"],
    datasets: [
      {
        label: "My First Dataset",
        data: [vote, 100 - vote],
        backgroundColor: ["#21d07a", "#1a3c27"],
        borderColor: "#4fbf98",
        hoverOffset: 5,
      },
    ],
    options: {
      tooltips: { enabled: false },
      hover: { mode: "show" },
    },
  };
  return <Doughnut className="DoughnutChart" data={data as any} />;
};
