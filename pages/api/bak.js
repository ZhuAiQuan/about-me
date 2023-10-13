import fs from 'fs';

export default function handler(req, res) {;
  const { UID, ReportParam } = req.body;
  const time = new Date().getTime();

  return res.status(200).json({
    Errcode: 0
  })
}