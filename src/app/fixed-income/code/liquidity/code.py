import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")

# Ensure time column is parsed as datetime
# data['Trade DateTime'] = pd.to_datetime(data['Trade Date'] + " " + data['Trade Time'], format='%d/%m/%y %H:%M:%S')

# NRML trades
nrml = data["Trade Indicator"].value_counts().get("NRML", 0)

volume_analysis = data.groupby('ISIN').agg({'Face Value': 'sum', 'Trade Price': 'count'})
volume_analysis.rename(columns={'Face Value': 'Total Volume', 'Trade Price': 'Trade Count'}, inplace=True)
abc = data.groupby('ISIN').agg(
    Total_NRML=('Trade Indicator', lambda x: (x == 'NRML').sum()),  # Count of "NRML"
    Total_Others=('Trade Indicator', lambda x: (x != 'NRML').sum())  # Count of non-"NRML"
)
volume_analysis_sorted = volume_analysis.sort_values(by="Trade Count", ascending=False)

print(volume_analysis_sorted)

# Price Volatility Analysis
price_volatility = data.groupby('ISIN').agg({'Trade Price': 'std'})
price_volatility.rename(columns={'Trade Price': 'Price Volatility'}, inplace=True)

# Yield Analysis
yield_variance = data.groupby('ISIN').agg({'YTM/Yield': ['mean', 'std']})
yield_variance.columns = ['Mean Yield', 'Yield Variance']

# Combine Results into a Single DataFrame
liquidity_metrics = pd.concat([volume_analysis, price_volatility, yield_variance], axis=1)
#print(volume_analysis_sorted)

# Visualizations
# Trade Volume Bar Chart
#plt.figure(figsize=(10, 6))
#liquidity_metrics['Total Volume'].plot(kind='bar', color='blue')
#plt.title('Trade Volume by Security')
#plt.xlabel('ISIN')
#plt.ylabel('Total Volume')
#plt.xticks(rotation=45)
#plt.show()


# Trade Count Bar Chart
#plt.figure(figsize=(10, 6))
#liquidity_metrics['Trade Count'].plot(kind='bar', color='orange')
#plt.title('Trade Count by Security')
#plt.xlabel('ISIN')
#plt.ylabel('Trade Count')
#plt.xticks(rotation=45)
#plt.show()

# Price Volatility Chart
#plt.figure(figsize=(10, 6))
#liquidity_metrics['Price Volatility'].plot(kind='bar', color='green')
#plt.title('Price Volatility by Security')
#plt.xlabel('ISIN')
#plt.ylabel('Price Volatility')
#plt.xticks(rotation=45)
#plt.show()


# Yield Variance Chart
#plt.figure(figsize=(10, 6))
#liquidity_metrics['Yield Variance'].plot(kind='bar', color='purple')
#plt.title('Yield Variance by Security')
#plt.xlabel('ISIN')
#plt.ylabel('Yield Variance')
#plt.xticks(rotation=45)
#plt.show()