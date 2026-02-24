import express from "express";
import { analyzePrompt } from "../services/aiService.js";
import {
  getWalletBalance,
  sendTransaction
} from "../services/blockchainService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await analyzePrompt(prompt);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/balance/:address", async (req, res) => {
  try {
    const balance = await getWalletBalance(req.params.address);
    res.json({ success: true, balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/send", async (req, res) => {
  try {
    const { to, amount } = req.body;
    const txHash = await sendTransaction(to, amount);
    res.json({ success: true, txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
