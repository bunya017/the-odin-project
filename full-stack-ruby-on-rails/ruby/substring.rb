def substrings(str, dict)
  subs = {}
  dict.each do |item|
    count = str.scan(item).count
    if count != 0
      subs[item] = count
    end
  end
  return subs
end