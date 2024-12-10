import pandas as pd
# import matplotlib.pyplot as plt

# Final Code
data = pd.read_csv("data.csv")

# Most traded security
volume_analysis = data.groupby('ISIN').agg({'Face Value': 'sum', 'Trade Price': 'count'})
volume_analysis.rename(columns={'Face Value': 'Total Volume', 'Trade Price': 'Trade Count'}, inplace=True)
volume_analysis['Average Trade Value (Cr.)'] = volume_analysis['Total Volume'] / volume_analysis['Trade Count']
volume_analysis.sort_values(by="Trade Count", ascending=False, inplace=True)
# print(volume_analysis_sorted)

# Percentage trades taken place over NDS-OM and OTC
NRML_trades = data["Trade Indicator"].value_counts().get("NRML", 0)
total_trades = data["Trade Indicator"].value_counts().sum()

grouped_trades = data.groupby("ISIN").agg(
    Total_Trades=('Trade Indicator', 'count'),
    NRML_Trades=('Trade Indicator', lambda x: (x == 'NRML').sum())
)
grouped_trades['NRML_Percentage'] = round((grouped_trades['NRML_Trades'] / grouped_trades['Total_Trades']) * 100, 2)
grouped_trades['OTC_Percentage'] = 100 - round(grouped_trades['NRML_Percentage'], 2)
# print(grouped_trades)

# Check for price volatility
price_volatility = data.groupby('ISIN').agg({'Trade Price': 'std'})
price_volatility.rename(columns={'Trade Price': 'Price Volatility'}, inplace=True)
price_volatility.sort_values(by="Price Volatility", ascending=False, inplace=True)
# print(price_volatility)

# Check for variance in yield
yield_variance = data.groupby('ISIN').agg({'YTM/Yield': ['mean', 'std']})
yield_variance.columns = ['Mean Yield', 'Yield Variance']
yield_variance.sort_values(by="Yield Variance", ascending=False, inplace=True)
# print(yield_variance)


# Concat
liquidity_metrics = pd.concat([volume_analysis, price_volatility, yield_variance], axis=1)
liquidity_metrics.to_csv("liquidity_metrics.csv", index=True)