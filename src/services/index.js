import { spawn } from "child_process";

export const accounts = async ({ ...rest }) => {
  const pythonFilePath = "components/model/risk(Depricated!).py";
  const result = await spawnPython({ pythonFilePath, ...rest });
  return { result };
};

export const tweets = async ({ ...rest }) => {
  const pythonFilePath = "components/model/risk(Depricated!).py";
  const result = await spawnPython({ pythonFilePath, ...rest });
  return { result };
};

export const audience = async ({ ...rest }) => {
  const pythonFilePath = "components/model/risk(Depricated!).py";
  const result = await spawnPython({ pythonFilePath, ...rest });
  return { result };
};

export const sentiment = async ({ ...rest }) => {
  const pythonFilePath = "components/model/risk(Depricated!).py";
  const result = await spawnPython({ pythonFilePath, ...rest });
  return { result };
};

const spawnPython = ({ pythonFilePath, ...rest }) =>
  new Promise((resolve, reject) => {
    const python = spawn("python3", [pythonFilePath, ...rest]);

    python.stdout.on("data", (data) => {
      console.log(data);
      resolve(parseFloat(data));
    });

    python.stderr.on("data", (data) => {
      const error = Error("ایراد در سیستم، لطفا بعدا تلاش کنید");
      error.data = data.toString();
      reject(error);
    });
  });
