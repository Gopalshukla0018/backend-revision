import { google } from "googleapis"

export const sheetExtraction = async (req, res) => {
    try {
        const { sheetUrl } = req.body
        const API_KEY = process.env.API_KEY

        const match = sheetUrl.match(/\/d\/([^/]+)/);
        if (!match) {
            return res.status(400).json({
                message: "invalid sheet url format"
            })
        }
        const sheetId = match[1];
        const range = 'A2:G13' // Removed 'Sheet1!' prefix to default to the first sheet


        const sheets = google.sheets({ version: "v4", auth: API_KEY })

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: range
        })

        const rows = response.data.values;
        if (!rows || rows.length == 0) {
            return res.status(404).json({
                message: "no data found"
            })
        }

        res.status(200).json(rows);


    } catch (error) {
        console.error("Sheet Extraction Error:", error);
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }



}