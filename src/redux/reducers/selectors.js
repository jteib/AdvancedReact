// selector function
export const sortAlpha = c => {
  const cc = [...c];
  cc.sort((a, b) => {
    return a.title
      ? a.title.localeCompare(b.title)
      : a.firstName.localeCompare(b.firstName);
  });
  return cc;
};

export const getBySlug = (objects, slug) => {
  return objects.find(o => o.slug === slug) || null;
};

// getVisibleBooks
export const getVisibleCourses = (
  courses,
  { text, sortBy, startYear, endYear }
) => {
  return courses
    .filter(course => {
      const textMatch =
        course.title.toLowerCase().includes(text.toLowerCase()) ||
        course.authorName.toLowerCase().includes(text.toLowerCase());

      const startYearMatch =
        typeof startYear !== "number" || startYear <= course.added;
      const endYearMatch =
        typeof endYear !== "number" || course.added <= endYear;

      return textMatch && startYearMatch && endYearMatch;
    })
    .sort((course1, course2) => {
      if (sortBy === "title") {
        return course1.title.localeCompare(course2.title);
      } else if (sortBy === "added") {
        return course1.added < course2.added ? -1 : 1;
      }
    });
};
