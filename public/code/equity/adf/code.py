import yfinance as yf
import numpy as np
from statsmodels.tsa.stattools import adfuller

ticker = "ITC.NS"
startDate = "2021-11-30"
endDate = "2024-11-30"
data = yf.download(ticker, start=startDate, end=endDate)

logReturns = np.log(data['Adj Close'] / data['Adj Close'].shift(1)).dropna()

# ADF
result = adfuller(logReturns)

print(f"Stationarity Test for {ticker}")
print(f"ADF Statistic: {round(result[0], 4)}")
print(f"p-value: {round(result[1], 4)}")
print("\nStationarity Conclusion: " +
          ("Stationary (p < 0.05)" if result[1] < 0.05 else "Not Stationary (p >= 0.05)"))