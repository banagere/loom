import yfinance as yf
import numpy as np
from statsmodels.stats.stattools import durbin_watson

ticker = "ITC.NS"
startDate = "2023-11-30"
endDate = "2024-11-30"
data = yf.download(ticker, start=startDate, end=endDate)

data['Log Returns'] = np.log(data['Adj Close'] / data['Adj Close'].shift(1))
data = data.dropna()
logReturns = data["Log Returns"].tolist()

durbinWatson = durbin_watson(logReturns)

print(f"Durbin-Watson statistic for {ticker} log returns: {round(durbinWatson, 2)}")