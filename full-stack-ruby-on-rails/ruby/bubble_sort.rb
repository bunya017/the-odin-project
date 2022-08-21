def bubble_sort(list)
  n = list.length
  while n > 1
    nn = 0
    for i in 1..(n - 1)
      if list[i - 1] > list[i]
        prev = list[i - 1]
        list[i - 1] = list[i]
        list[i] = prev
        nn = i
      end
    end
    n = nn
  end
  return list
end