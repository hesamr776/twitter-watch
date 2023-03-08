import service from "@/src/services";

export default async function accounts(_, res) {
  // const response = await service.accounts({
  //   ...rest,
  // });
  setTimeout(() => {
    res.status(200).json([{ name: "Elon Musk", avatar: "", background: "" }]);
  }, 400);
}
