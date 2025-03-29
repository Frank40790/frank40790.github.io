public class Vector extends Coordinate {
  public double vec_x, vec_y, vec_z;

  public Vector() {
      super(0.0, 0.0, 0.0);
      this.vec_x = 0.0;
      this.vec_y = 0.0;
      this.vec_z = 0.0;
  }
  
  public Vector(Coordinate pos, Coordinate vec) {
      super(pos.pos_x, pos.pos_y, pos.pos_z);

      this.vec_x = vec.pos_x;
      this.vec_y = vec.pos_y;
      this.vec_z = vec.pos_z;
  }
  ...
  public Vector getUnitVector() {
    return new Vector(this.getPosition(), this.getUnitVectorDirection());
  }

  public void add(Vector v) {
      this.vec_x += v.vec_x;
      this.vec_y += v.vec_y;
      this.vec_z += v.vec_z;
  }

  public void add(double scalar) {
      this.vec_x += scalar;
      this.vec_y += scalar;
      this.vec_z += scalar;
  }

  public static Vector add(Vector v1, Vector v2) {
      return new Vector(v1.vec_x + v2.vec_x, v1.vec_y + v2.vec_y, v1.vec_z + v2.vec_z);
  }

  public static Vector add(Vector v1, double scalar) {
      return new Vector(v1.pos_x + scalar, v1.pos_y + scalar, v1.pos_z + scalar);
  }
}