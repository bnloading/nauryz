/**
 * Formats a date string into Indonesian format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in Indonesian
 *
 * @example
 * // returns "Senin, 1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 *
 * // returns "1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 *
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDateIndonesian = (isoString, format = "full") => {
  const date = new Date(isoString);

  const formats = {
    full: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Jakarta",
    },
    short: {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    },
    time: {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    },
  };

  // Indonesian month names mapping
  const monthsIndonesian = {
    January: "Januari",
    February: "Februari",
    March: "Maret",
    April: "April",
    May: "Mei",
    June: "Juni",
    July: "Juli",
    August: "Agustus",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "Desember",
  };

  // Indonesian day names mapping
  const daysIndonesian = {
    Sunday: "Minggu",
    Monday: "Senin",
    Tuesday: "Selasa",
    Wednesday: "Rabu",
    Thursday: "Kamis",
    Friday: "Jumat",
    Saturday: "Sabtu",
  };

  let formatted = date.toLocaleDateString("en-US", formats[format]);

  // Handle time format separately
  if (format === "time") {
    return date.toLocaleTimeString("en-US", formats[format]);
  }

  // Replace English month and day names with Indonesian ones
  Object.keys(monthsIndonesian).forEach((english) => {
    formatted = formatted.replace(english, monthsIndonesian[english]);
  });

  Object.keys(daysIndonesian).forEach((english) => {
    formatted = formatted.replace(english, daysIndonesian[english]);
  });

  // Format adjustment for full date
  if (format === "full") {
    // Convert "Hari, Tanggal Bulan Tahun" format
    const parts = formatted.split(", ");
    if (parts.length === 2) {
      formatted = `${parts[0]}, ${parts[1]}`;
    }
  }

  return formatted;
};

/**
 * Күнді қазақ тілінде форматтау
 * @param {string} isoString - Форматталатын ISO күн жолы
 * @param {('full'|'short'|'time')} [format='full'] - Қолданылатын формат түрі
 * @returns {string} Қазақ тілінде форматталған күн жолы
 *
 * @example
 * // returns "Дүйсенбі, 1 Қаңтар 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 *
 * // returns "1 Қаңтар 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 *
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = "full", locale = "kk") => {
  const date = new Date(isoString);

  const formats = {
    full: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Hovd", // Mongolia/Ulgii timezone
    },
    short: {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Hovd",
    },
    time: {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Hovd",
    },
  };

  // Kazakh month names mapping
  const monthsKazakh = {
    January: "Қаңтар",
    February: "Ақпан",
    March: "Наурыз",
    April: "Сәуір",
    May: "Мамыр",
    June: "Маусым",
    July: "Шілде",
    August: "Тамыз",
    September: "Қыркүйек",
    October: "Қазан",
    November: "Қараша",
    December: "Желтоқсан",
  };

  // Kazakh day names mapping
  const daysKazakh = {
    Sunday: "Жексенбі",
    Monday: "Дүйсенбі",
    Tuesday: "Сейсенбі",
    Wednesday: "Сәрсенбі",
    Thursday: "Бейсенбі",
    Friday: "Жұма",
    Saturday: "Сенбі",
  };

  // Mongolian month names mapping
  const monthsMongolian = {
    January: "1-р сар",
    February: "2-р сар",
    March: "3-р сар",
    April: "4-р сар",
    May: "5-р сар",
    June: "6-р сар",
    July: "7-р сар",
    August: "8-р сар",
    September: "9-р сар",
    October: "10-р сар",
    November: "11-р сар",
    December: "12-р сар",
  };

  // Mongolian day names mapping
  const daysMongolian = {
    Sunday: "Ням",
    Monday: "Даваа",
    Tuesday: "Мягмар",
    Wednesday: "Лхагва",
    Thursday: "Пүрэв",
    Friday: "Баасан",
    Saturday: "Бямба",
  };

  const months = locale === "mn" ? monthsMongolian : monthsKazakh;
  const days = locale === "mn" ? daysMongolian : daysKazakh;

  let formatted = date.toLocaleDateString("en-US", formats[format]);

  // Handle time format separately
  if (format === "time") {
    return date.toLocaleTimeString("en-US", formats[format]);
  }

  // Replace English month and day names with locale-appropriate ones
  Object.keys(months).forEach((english) => {
    formatted = formatted.replace(english, months[english]);
  });

  Object.keys(days).forEach((english) => {
    formatted = formatted.replace(english, days[english]);
  });

  // Format adjustment for full date: reorder to "22 Тамыз 2026, Сенбі"
  if (format === "full") {
    const parts = formatted.split(", ");
    if (parts.length === 3) {
      const [weekday, monthDay, year] = parts;
      const mdParts = monthDay.split(" ");
      const day = mdParts[mdParts.length - 1];
      const month = mdParts.slice(0, -1).join(" ");
      formatted = `${day} ${month} ${year}, ${weekday}`;
    }
  }

  return formatted;
};
