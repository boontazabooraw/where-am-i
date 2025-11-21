export default async function handler(req: any, res: any) {
  const ipAddress =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket?.remoteAddress;
  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const data = await response.json();
  res.status(200).json(data);
}
