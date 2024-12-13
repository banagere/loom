import yfinance as yf
import pandas as pd
from arch import arch_model
import matplotlib.pyplot as plt

ticker = "ITC.NS"
startDate = "2023-11-30"
endDate = "2024-11-30"
data = yf.download(ticker, start=startDate, end=endDate)

data['Returns'] = data['Adj Close'].pct_change().dropna()

# Setup the GARCH (1,1)
model = arch_model(data['Returns'].dropna(), vol='GARCH', p=1, q=1)
results = model.fit(disp='off')
# print(results.summary())

# Plot
fig = results.plot(annualize='D')
plt.show()
