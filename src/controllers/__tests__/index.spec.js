const { GenreController } = require("../index");
const { Genre } = require("../../models/genre.model");
const genres = require("../../__mocks__/data.mock");

const mockRequest = () => {
  return {
    body: {},
    params: {}
  };
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Test suite for genre", () => {
  beforeAll(() => {
    (Genre.find = jest.fn().mockResolvedValue(genres)),
      (Genre.create = jest.fn().mockResolvedValue({
        counnt: 1,
      })),
      (Genre.deleteOne = jest.fn().mockResolvedValue({
        delCount: 1,
      }));
  });
  const req = mockRequest();
  const res = mockResponse();

  it("Should insert genre", async () => {
    req.body = {
      name: "Earth",
      description: "Awesome movie",
    };
    await GenreController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("Should fetch genre", async () => {
    req.params.name = null;
    await GenreController.get(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should fetch with parameter genre", async () => {
    await GenreController.get(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should delete genre", async () => {
    req.params.name = "age";
    await GenreController.deleteGenre(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should not delete genre", async () => {
    req.params = null;
    await GenreController.deleteGenre(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
