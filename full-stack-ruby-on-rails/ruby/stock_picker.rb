def stock_picker(stocks)
  days = []
  max_profit = 0
  stocks.each_with_index do |s_x, i|
    stocks[i, stocks.length].each_with_index do |s_y, j|
      profit = s_y - s_x
      if profit > max_profit
        max_profit = profit
        days = [i, j+i]
      end
    end
  end
  return days
end